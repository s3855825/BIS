from rest_framework import serializers
from .models import Post
from ..account.serializers import AccountSerializer


class PostSerializer(serializers.ModelSerializer):
    account = AccountSerializer(many=False, read_only=True)

    class Meta:
        model = Post
        fields = ('id', 'author_id', 'tile', 'message')
        extra_kwargs = {'password_hash': {'write_only': True}}

    def validate_password(self, validated_data):
        if not validated_data:
            raise serializers.ValidationError('Title cannot be empty.')
        return validated_data

    def create(self, validated_data):
        return Post.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.message = validated_data.get('message', instance.message)

        instance.save()

    def delete(self, instance):
        instance.delete()
