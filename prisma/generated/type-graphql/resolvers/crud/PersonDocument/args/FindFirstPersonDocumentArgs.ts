import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PersonDocumentOrderByInput } from "../../../inputs/PersonDocumentOrderByInput";
import { PersonDocumentWhereInput } from "../../../inputs/PersonDocumentWhereInput";
import { PersonDocumentWhereUniqueInput } from "../../../inputs/PersonDocumentWhereUniqueInput";
import { PersonDocumentScalarFieldEnum } from "../../../../enums/PersonDocumentScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstPersonDocumentArgs {
  @TypeGraphQL.Field(_type => PersonDocumentWhereInput, {
    nullable: true
  })
  where?: PersonDocumentWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PersonDocumentOrderByInput], {
    nullable: true
  })
  orderBy?: PersonDocumentOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => PersonDocumentWhereUniqueInput, {
    nullable: true
  })
  cursor?: PersonDocumentWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PersonDocumentScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "deletedAt" | "file" | "title" | "updatedAt" | "personId"> | undefined;
}
